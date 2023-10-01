const Form = ({ event, children, className }) => {
    return (
        <form onSubmit={event} className={`${className} md:text-black md:bg-gray-100 w-11/12 shadow-md p-6 rounded-lg md:w-4/5 md:px-12 md:py-8 lg:w-3/5 lg:px-16 lg:py-10`} >
        { children }
        </form >
    );
}
export default Form;