import { useEffect, FunctionComponent } from "react";

interface TestProps {
    num: number
}
 
const Test: FunctionComponent<TestProps> = ({ num }) => {
    useEffect(() => {
        console.log("Test");
    }, [])
    
    return (
        <> 
        <div className="flex-none w-20 h-20 bg-red-300">
            { num }
        </div>
        </>
    );
}
 
export default Test;