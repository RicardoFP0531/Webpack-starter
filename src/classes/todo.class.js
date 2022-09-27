
//clase fuera del archivo poner palabra clave reservada export

export class Todo {
//                  des-estructuracion de objetos en la parte de abajo
    static fromJson( id, tarea, completado, creado)  {

        const tempTodo      = new Todo(tarea);
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return  tempTodo;
    }

    constructor( tarea ) {
        //tarea que recibo por argumento
        this.tarea = tarea;

        //se define lo que se pondra en la clase
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();

    }

    imprimirClase(  ) {
        console.log(`${this.tarea} - ${this.id}`);
}

}