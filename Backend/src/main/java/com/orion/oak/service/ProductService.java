package com.orion.oak.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.orion.oak.model.Product;
import com.orion.oak.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	public Product getProduct(int id) {
	
		return productRepository.findById(id).get();
	}
	public List<Product>  getProducts(){
		List allProducts = productRepository.findAll();
		Collections.reverse(allProducts);
		return allProducts;
		
	}
	public Product addProduct(Product product) {
		
		return productRepository.save(product);
		
	}
	public void deleteProduct(int id) {
		//Database remove operation
		Product product = getProduct(id);
		productRepository.delete(product);
	}
	public Product updateProduct(Product product) {
	
		return productRepository.save(product);
		
	}
	public List<Product> findByQuery(String name, String description) {
		// TODO Auto-generated method stub
		return productRepository.findByNameAndDescription(name, description);
	}

	public List<Product>  getProductsByCategoryId(int categoryId){
		
		return productRepository.getProductsByCategoryId(categoryId);
		
	}

	
	public List<Product> findTop10ByproductIdOrderByDescproductId() {
		// TODO Auto-generated method stub
		
		return productRepository.findAll();
	}
	
}
