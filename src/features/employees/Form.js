import 'element-theme-default';

export default function Form(){

  return <div className="demo-block demo-box demo-layout">
    <form action="">
      개인정보
      
      <div className="el-form-item">
        성명 *
        <input className="el-input__inner" type="text" />
        <div className="el-form-item__error">
          This field must be a valid email
        </div>
      </div>

      <div className="el-form-item">
        이메일
        <input className="el-input__inner" type="text" />
      </div>

      <div className="el-form-item">
        내외국인 구분
        <input name="isDometic" type="radio" id="isDometic1"/>
        <label htmlFor="isDometic1">내국인</label>

        <input name="isDometic" type="radio" id="isDometic2"/>
        <label htmlFor="isDometic2">외국인</label>

      </div>
      
      
      <div className="el-form-item">
        주민등록번호 *
        <input className="el-input__inner" type="text" />
      </div>

      <div className="el-form-item">
        현재 대한민국에 거주(체류)하고 있습니까?
        <input name="isStay" type="radio" id="isStay1"/>
        <label htmlFor="isStay1">거주함</label>
      
        <input name="isStay" type="radio" id="isStay2"/>
        <label htmlFor="isStay2">거주 안함</label>
      </div>
      
      <button className="el-button el-button--primary">등록</button>
      
    </form>
  </div>
}