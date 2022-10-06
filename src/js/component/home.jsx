import React, {useState} from "react";


// create your first component
const Home = () => { // declaracion de estados

    const [tarea, setTarea] = useState("")
    const [listaDeTareas, setListadeTareas] = useState([])


    function handleSubmit(e) {

        if (e.key === 'Enter') {
            e.preventDefault();
            setListadeTareas([
                ...listaDeTareas,
                tarea
            ])
            setTarea("");
            console.log(listaDeTareas)
        }


    }

    const eliminarTarea = (i) => {
        const tareaFiltrada = listaDeTareas.filter((tarea, index) => {
            if (i !== index) {
                return tarea
            }
            });
            setListadeTareas(tareaFiltrada)
    };


    
    return (
        <div className="container m-5">
            <div className="card p-5">
                <form>
                    <div className="mb-3">

                        <h1>To do List</h1>

                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={
                                (e) => setTarea(e.target.value)
                            }
                            onKeyDown={handleSubmit}
                            value={tarea}/>
                    </div>
                </form>


                <ul className="list-group list-group-flush">
                    {
                    listaDeTareas.map((tarea, i) => {
                        return (
                            <li className="list-group-item border border-1 tareaOculta"
                                key={i}>
                                {tarea}
                                <span className="close"
                                    onClick={
                                        () => eliminarTarea(i)
                                }>x</span>
                            </li>
                        );
                    })
                } </ul>

                <div className="p-1"> {listaDeTareas.length == 0 ? "No hay tareas, añadir tareas" : "Numero de tareas: "+listaDeTareas.length} </div>

            </div>
        </div>
    );
};

export default Home;
