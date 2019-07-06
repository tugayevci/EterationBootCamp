package com.orion.oak.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.orion.oak.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer>{

}
