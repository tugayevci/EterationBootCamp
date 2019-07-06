import React, { Component } from 'react'
import { Table, Button, Alert } from 'react-bootstrap';
import Cookies from 'universal-cookie'
import '../components/Table/buttonCss.css'
import Swal from 'sweetalert2'


export default class Cart extends Component {
    constructor(props, context) {
       
        super(props, context);
   

        this.state = {
            
            productList:[] ,
        
            show: false,
        }

    }
    componentDidMount() {
        const cookies = new Cookies();
        this.setState({
            productList:cookies.get("products")
        
        })
    }

    checkOrder(){
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
          }).queue([
            {
              title: 'Your Name and Surname',
              text: 'Please enter your name and surname.'
            },
            'Your Address',
            'Phone Number'
          ]).then((result) => {
            if (result.value) {
              Swal.fire({
                title: 'All done!',
                html:
                  'Your order is on the way <pre><code>' +
                    JSON.stringify(result.value) +
                  '</code></pre>',
                confirmButtonText: 'Lovely!'               

              })
              var templist=[];
              this.setState({
                productList:templist
            })
            const cookies = new Cookies();

            cookies.set("products", templist, "/");

            }
          })


    }

    onDelete(productId,productindex) {
        console.log(productindex)
        const cookies = new Cookies();
        var templist=[];
        var count=0;
        for (let index = 0; index < this.state.productList.length; index++) {
            const element = this.state.productList[index];
            
            console.log(element)
            if (element.productId ==  productId && count==0 ) {
                console.log("buldum" + productId)
                count ++;
                
            }
            else{
                templist.push(element);
                console.log("bulamadım")
            }

        }
        this.setState({
            productList:templist
        })
        cookies.set("products", templist, "/");
      
    //     this.setState({
    //         productList: this.state.productList.filter((item, index) =>
    //             item.productId !== productId
    //         )
    //     })
    //     templist=this.state.productList 
    //    console.log(this.state.productList)
    //    cookies.set("products", templist, "/");
        
    // 
    }

    render() {
       
       
        var total = 0;

if(this.state.productList==null){
    return <div><h1 style={{color:"white",textAlign:"center",margin:"100px"}}>YOUR CART IS EMPTY</h1></div>
}else{
    if(this.state.productList.length===0){
        return <div><h1 style={{color:"white",textAlign:"center",margin:"100px"}}>YOUR CART IS EMPTY</h1></div>
    }else{
        return (
            <div className="container">
                <br></br>
    
    
                
                <Table variant="dark"  style={{backgroundColor: "#000"}} >
                    
                    <tbody>{
    
                           
    
                        this.state.productList.map((item, index) => (total += parseInt(item.productPrice) , <tr key={index}>
                     
    
                            <th><img src={item.productImagePath} alt='img-tablet' width='100' height='100' /></th>
                            {/* <th><img src={require(`../../images/${item.img}.jpg`)} alt='img-tablet' width='100' height='100' /></th> */}
                            <th style={{textAlign:"center",verticalAlign:"middle"}} >{item.productName}</th>
                            <th style={{textAlign:"center",verticalAlign:"middle",fontSize:"30px"}}>{item.productPrice} $</th>
                            <th style={{textAlign:"center",verticalAlign:"middle"}}><Button  onClick={()=>{this.onDelete(item.productId,index)}} ><i class="fa fa-trash"></i>
                            </Button></th>
    
    
                        </tr>))
                    }
                    </tbody>
                </Table>
    
                <div className="row">
    
                    <div className="col-md-6">
                        <button onClick={()=> {this.checkOrder()}} class="button button2">Check Order</button>
    
                    </div>
                    <div className="col-md-6">
                        <Alert variant='DARK'>
                            <p className="cartPrice">Total Price: {total} $</p>
                        </Alert>
                    </div>
    
    
                </div>
            </div>
        )
}


}

        
    }
}
