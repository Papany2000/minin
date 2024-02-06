import Button from "../Button/Button";


const Header = () => {
    const tg = window.Telegram.WebApp
    const onClose = () => {
        tg.close()
      }
      // tg.initDataUnsafe?.user?.user name пользователя из объекта initDataUnsafe
    return (
        <div className={'header'}>
            <Button onCLick={onClose}>Закрыть</Button>
            <span className={'username'} >{tg.initDataUnsafe?.user?.user}</span>
        </div>
    )
}

export default Header;