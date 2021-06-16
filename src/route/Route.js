import { Switch, Route } from "react-router-dom";
import Employees from '../features/employees/Employees';
import Form from '../features/employees/Form';

export default function Router(){
  return (
    <Switch>
      <Route exact path="/employment/form/add" component={Form} />
      <Route exact path="/" component={Employees} />
    </Switch>
  );
};
