package com.orion.oak.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.orion.oak.model.Category;
import com.orion.oak.repository.CategoryRepository;


@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	
	public Category getCategory(int id) {
	
		return categoryRepository.findById(id).get();
	}
	public List<Category>  getCategories(){

		
	
		
		return categoryRepository.findAll();
		
	}
	public Category addCategory(Category category) {
		return categoryRepository.save(category);
	}
	public void deleteCategory(int id) {
		Category category = getCategory(id);
		categoryRepository.delete(category);
	}
	public Category updateCategory(Category category) {
		return categoryRepository.save(category);
		
	}
}
