package com.orion.oak.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.orion.oak.model.Order;
import com.orion.oak.repository.OrderRepository;

@Service
public class OrderService {

	

		@Autowired
		OrderRepository orderRepository;
		
		public Order getOrder(int id) {
			
			return orderRepository.findById(id).get();
		}
		
		public List<Order>  getOrders(){
			return orderRepository.findAll();
		}
		public Order addOrder(Order order) {
			
			return orderRepository.save(order);
			
		}
		public void deleteOrder(int id) {
			//Database remove operation
			Order order = getOrder(id);
			orderRepository.delete(order);
		}
		public Order updateOrder(Order order) {
		
			return orderRepository.save(order);
			
		}
		

	}
	
	
