import { Switch, Route } from "react-router-dom";
import Employees from '../features/employees/Employees';
import FormContainer from '../features/employees/FormContainer';

export default function Router(){
  return (
    <Switch>
      <Route exact path="/employment/form/add" component={FormContainer} />
      <Route exact path="/" component={Employees} />
    </Switch>
  );
};
