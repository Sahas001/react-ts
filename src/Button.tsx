
const Button = ({name, num}: MyInterface) => {
  return (
    <div>
        <button>{name + ' ' + num}</button>
    </div>
  )
}

export default Button