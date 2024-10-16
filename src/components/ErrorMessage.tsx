function ErrorMessage (props:any){
            return (
                props.foodArray.length == 0 ? <h3> hey aint no foood for now </h3> : <h4>hey eat this shit bro</h4>
            )

}
export default ErrorMessage