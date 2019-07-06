package com.orion.oak.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.orion.oak.model.Cart;
import com.orion.oak.model.Order;
import com.orion.oak.service.CartService;
import com.orion.oak.service.OrderService;

@RestController
@RequestMapping("/carts")
public class CartResources {
	
	@Autowired
	CartService cartService;
	
	@Autowired
	OrderService orderService;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public Cart getCart(@PathVariable int id) {
		return cartService.getCart(id);
	}
	@RequestMapping(method = RequestMethod.GET)
	public List<Cart> getCarts(){
		return cartService.getCarts();
	}
	@RequestMapping(method = RequestMethod.POST)
	public Cart addCart(@RequestBody final Cart cart) {
		Cart addCart = cartService.addCart(cart);
		return addCart;
	}
	
	@RequestMapping(value="/{id}" , method = RequestMethod.DELETE)
	public void deleteCart(@PathVariable int id) {
		 cartService.deleteCart(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Cart updateCart(@RequestBody final Cart cart) {
		return cartService.updateCart(cart);
	}
	
	

}
