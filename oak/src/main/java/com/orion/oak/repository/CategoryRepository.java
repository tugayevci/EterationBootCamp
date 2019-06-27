package com.orion.oak.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.orion.oak.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
