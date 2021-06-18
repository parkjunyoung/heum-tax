import { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { employeesAction } from './slice';
import 'element-theme-default';
import ValidationMessage from './ValidationMessage';
import Modal from './Modal';

export default function Form(){

  const [ isVisible , setIsVisible ] = useState(false);

  const onSetIsVisible = (active) => { 
    setIsVisible(active);
  }

  const { register, handleSubmit , formState: { errors } , reset } = useForm();

  const { request } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const onSubmit = ( data ) => {
    dispatch(employeesAction.addEmployees(data)); 
  }

  useEffect(() => {
    if(request.data) setIsVisible(true);
    reset();
  }, [request.data]);


  return <div className="demo-block demo-box demo-layout">
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <h3>개인정보</h3>
      
      <div className="el-form-item">
        성명 *
        <input className="el-input__inner" type="text" {...register("name" ,  { required: true } )} />
        { errors.name?.type === 'required' && <ValidationMessage message="필수 정보입니다." /> }
      </div>

      <div className="el-form-item">
        이메일
        <input className="el-input__inner" type="text" 
        {...register("email" , { 
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 양식에 맞춰주세요."
          }
        })} />
        { errors.email && <ValidationMessage message={errors.email.message }/> }
      </div>

      

      <div className="el-form-item">
        내외국인 구분 <br/>
        <input name="isDometic" type="radio" id="isDometic1" value="내국인" {...register("isDometic")}/>
        <label htmlFor="isDometic1">내국인</label>

        <input name="isDometic" type="radio" id="isDometic2" value="외국인" {...register("isDometic")}/>
        <label htmlFor="isDometic2">외국인</label>

      </div>
      
      
      <div className="el-form-item">
        주민등록번호 *
        <input className="el-input__inner" type="text" 
        {...register("regNumber" , { 
          required: {
            value : true,
            message : "필수 필드 입니다."
          }, 
          pattern: {
            value: /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/,
            message: "주민등록번호 양식에 맞춰주세요."
          }
        })} />
        { errors.regNumber && <ValidationMessage message={errors.regNumber.message }/> }
      </div>

      <div className="el-form-item">
        현재 대한민국에 거주(체류)하고 있습니까?
        <input name="isStay" type="radio" id="isStay1" value="거주함" {...register("isStay")}/>
        <label htmlFor="isStay1">거주함</label>
      
        <input name="isStay" type="radio" id="isStay2" value="거주 안함" {...register("isStay")} />
        <label htmlFor="isStay2">거주 안함</label>
      </div>
      
      <button className="el-button el-button--primary">등록</button>
      
      <Modal isVisible={isVisible} data={request.data} onSetIsVisible={onSetIsVisible} />

    </form>
  </div>
}