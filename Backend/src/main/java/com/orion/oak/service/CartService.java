package com.orion.oak.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.orion.oak.model.Cart;
import com.orion.oak.repository.CartRepository;

@Service
public class CartService {

	@Autowired
	CartRepository cartRepository;
	
	public Cart getCart(int id) {
		
		return cartRepository.findById(id).get();
	}
	
	public List<Cart>  getCarts(){
		return cartRepository.findAll();
	}
	public Cart addCart(Cart cart) {
		
		return cartRepository.save(cart);
		
	}
	public void deleteCart(int id) {
		//Database remove operation
		Cart cart = getCart(id);
		cartRepository.delete(cart);
	}
	public Cart updateCart(Cart cart) {
	
		return cartRepository.save(cart);
		
	}
	

}
