package com.orion.oak.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.orion.oak.model.Category;
import com.orion.oak.model.Product;
import com.orion.oak.service.CategoryService;


@RestController
@CrossOrigin
@RequestMapping("/categories")
public class CategoryResources {

	@Autowired
	CategoryService categoryService;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public Category getCategory(@PathVariable int id) {
		return categoryService.getCategory(id);
	}
	@RequestMapping(method = RequestMethod.GET)
	public List<Category> allCategories(){
		return categoryService.getCategories();
		
	}
	@RequestMapping(method = RequestMethod.POST)
	public Category addCategory(@RequestBody final Category category) {
		return categoryService.addCategory(category);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteCategory(@PathVariable int id) {
		 categoryService.deleteCategory(id);
		
	}
	@RequestMapping(method = RequestMethod.PUT)
	public Category updateCategory(@RequestBody Category category) {
		return categoryService.updateCategory(category);
	}
}
