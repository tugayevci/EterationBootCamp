package com.orion.oak.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.orion.oak.model.Product;
import com.orion.oak.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductResources {
	
	@Autowired
	ProductService productService;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public Product getProduct(@PathVariable int id) {
		return productService.getProduct(id);
	}
	@RequestMapping(method = RequestMethod.GET)
	public List<Product> getProducts(){
		return productService.getProducts();
	}
	@RequestMapping(method = RequestMethod.POST)
	public Product addProduct(@RequestBody final Product product) {
		Product addProduct = productService.addProduct(product);
		return addProduct;
	}
	

	@RequestMapping(value="/{id}" , method = RequestMethod.DELETE)
	public void deleteProduct(@PathVariable int id) {
		 productService.deleteProduct(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Product updateProduct(@RequestBody final Product product) {
		return productService.updateProduct(product);
	}
	@RequestMapping(value="/{name}/{description}",method=RequestMethod.GET)
	public List<Product> getProductNameDescription(@PathVariable String name,@PathVariable String description) {
		return productService.findByQuery(name,description);
	}
	
	@RequestMapping(value="/category/{id}", method = RequestMethod.GET)
	public List<Product> getProductsCategory(@PathVariable int id){
		return productService.getProductsByCategoryId(id);
	}
	
	
	@RequestMapping(value="/last10", method = RequestMethod.GET)
	public List<Product> findTop10OrderByproductIdDesc(){
		return productService.findTop10ByproductIdOrderByDescproductId();
	}
	
	
	
	
}
