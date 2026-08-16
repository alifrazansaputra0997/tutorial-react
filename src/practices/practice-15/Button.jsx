export default function Button({ mode='button', Icon, onClick, disabled = false, children  }) {
    console.log('Icon', Icon)
    let IconBtn = Icon && (
        <span className="button-icon">
            <Icon />
        </span>
    )
    let classNameBtn = 'filled-button';
    if(mode == 'filled'){
        classNameBtn += ' filled-button'
    } else if(mode == 'outline'){
        classNameBtn += ' outline-button'
    } else if(mode == 'text'){
        classNameBtn += ' text-button'
    } 
    
    if(IconBtn){
        classNameBtn += ' icon-button';
    }
    
    return (
            <button
                className={classNameBtn}
                type={mode}
                onClick={onClick}
                disabled={disabled}
            >
                <span>{children}</span>
                {IconBtn}
            </button>
    )
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
}
