import Button from './Button'

const Header = ({onAdd, mostrarForm}) => {
    return (
        <header className='header'>
            <h1>Tareas</h1>
            <Button texto={!mostrarForm ? 'Agregar' : 'Ocultar'} color={!mostrarForm ? 'green' : 'red'} onClick={onAdd} />
        </header>
    )
}


export default Header