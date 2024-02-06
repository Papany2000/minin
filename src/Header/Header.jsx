import Button from "../Button/Button";
import { useTelegram } from "../hook/useTelegram";


const Header = () => {
    
   const {user, onClose} = useTelegram()
   
    return (
        <div className={'header'}>
            <Button onCLick={onClose}>Закрыть</Button>
            <span className={'username'} >{user?.user}</span>
        </div>
    )
}

export default Header;