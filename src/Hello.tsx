function Hello(){

    const matta = 'minininiinini'
    const minnu = function(){
        return 'from function aada'
    }
    return <div>
        {/* hey itsme hello from {matta} */}
        hey itsme hello from {minnu()} and this from {matta}

    </div>
}
export default Hello