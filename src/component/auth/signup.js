import Button from "../ui-elements/button";
import Input from "../ui-elements/input";
function SignUpForm() {

    let isLoggedIn = true;
    //let username = isLoggedIn? isLoggedIn: false;

    const handleBackBtn = (event) => {
        event.preventDefault();
        console.log("Back Button Clicked")
    };
    const handleSubmitBtn = (event) => {
        event.preventDefault();
        console.log("Submit Button Clicked")
    };

    return (
        <form className='form-container'>
            <Input type="text" placeholder='username' />
            <Input type="password" placeholder='password' />
            <Input type="password" placeholder='confirm-password' />

            <div className="btn-container">
                {
                    isLoggedIn ? <Button name="Back" classAttrib="btn back-btn" handleSubmit={handleBackBtn} />
                        : ""
                }
                <Button name="Submit" classAttrib="btn submit-btn" handleSubmit={handleSubmitBtn} />
            </div>

            {/* <Button name="Cross" classAttrib="btn to-next" /> */}

        </form>
    )
}
export default SignUpForm;