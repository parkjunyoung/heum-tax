import { Input } from 'element-react';
import 'element-theme-default';

export default function Form(){
  return <>
    <form action="">
      개인정보
      성명
      이메일
      내외국인 구분
      주민등록번호
      현재 대한민국에 거주(체류)하고 있습니까?
      <Input type="text" />
    </form>
  </>
}