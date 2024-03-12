import { useState } from 'react';

function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Log In</button>
      {isOpen && (
        <dialog open>
          <h2>Login Dialog</h2>
          <button onClick={handleClose}>Close</button>
          {/* Insert your login form here */}
          <form action="">
            <input type="email" placeholder='Email'/>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default LoginButton;
