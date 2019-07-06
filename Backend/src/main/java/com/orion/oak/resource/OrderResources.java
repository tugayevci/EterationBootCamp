package com.orion.oak.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.orion.oak.model.Order;
import com.orion.oak.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderResources {

	@Autowired
	OrderService orderService;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public Order getOrder(@PathVariable int id) {
		return orderService.getOrder(id);
	}
	@RequestMapping(method = RequestMethod.GET)
	public List<Order> getOrders(){
		return orderService.getOrders();
	}
	@RequestMapping(method = RequestMethod.POST)
	public Order addOrder(@RequestBody final Order order) {
		Order addOrder = orderService.addOrder(order);
		return addOrder;
	}
	
	@RequestMapping(value="/{id}" , method = RequestMethod.DELETE)
	public void deleteOrder(@PathVariable int id) {
		 orderService.deleteOrder(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Order updateOrder(@RequestBody final Order order) {
		return orderService.updateOrder(order);
	}
	
}
