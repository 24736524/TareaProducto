class Producto {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
        }
    }
    
    class UI {
        addProducto(producto) {
            const productList = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                    
                        <strong>Product Name</strong>: ${producto.name}
                        <strong>Product Price</strong>: ${producto.price}
                        <strong>Product Year</strong>: ${producto.year}
                        <a href="#" class="btn btn-danger" name="delete">Borrar</a>

                    </div>
                </div>
            `;
            productList.appendChild(element);

        }

        resetForm() {
            document.getElementById("product-form").reset();

        }
        deleteProducto(element) {
            if(element.name ==='delete'){
                element.parentElement.parentElement.parentElement.remove();
                this.showMessage('Product Deleted Successfully', 'danger');
            }
        }
        showMessage(message, cssClass) {
            const div = document.createElement('div');
            div.className = `alert alert-${cssClass} mt-2`;
            div.appendChild(document.createTextNode(message));

            //visualidando el DOOM  
            const container = document.querySelector('.container');
            const app = document.querySelector('#App');
            container.insertBefore(div, app);
            setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 5000);
        }
    }
    
    
    //ventos que se muestran en el DOOM 
    
    document.getElementById("product-form")
        .addEventListener("submit", function(a) {
            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;
            const year = document.getElementById('year').value;

            const producto = new Producto(name, price, year);
            const ui = new UI();
                if(name === '' || price === '' || year === '') {
                    return ui.showMessage('datos incompletos', 'danger');
                }
            ui.addProducto(producto);
            ui.resetForm();
            ui.showMessage('Product Added Successfully', 'success');

            a.preventDefault();
    });
    document.getElementById("product-list")
    .addEventListener('click', function (a) {
        const ui = new UI();
        ui.deleteProducto(a.target);
    })