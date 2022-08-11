var url = "https://dummy.restapiexample.com/api/v1/employees";

function obtenerDatos(){
    fetch(this.url).
        then(response => response.json()).
        then(json => console.log(json));
}

function gTabla(){
    
}