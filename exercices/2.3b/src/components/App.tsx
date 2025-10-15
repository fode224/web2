import { User } from "../types";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";
const App = () => {
const title = "Welcome to My App";

const users:User[]=[
    {name:"Fode",age:19},
    {name:"Alice",age:23},
    {name:"Foden",age:26},
];

const footerText = "© 2023 My App";


return(
<div>
    <PageTitle title={title}/>
    {users.map((user) =>(
        <UserCard user ={user}/>
    
))} 
    <Footer text = {footerText}/>
</div>
);
};


  

export default App;
