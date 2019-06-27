package com.orion.oak;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.orion.oak.model.Category;
import com.orion.oak.model.Product;
import com.orion.oak.repository.CategoryRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OakApplicationTests {
	@Autowired
	CategoryRepository catalogRepository;
	
	@Test
	public void contextLoads() {
		Category catalog = new Category();
		catalog.setCategoryDescription("Oak");
		catalog.setCategoryName("Hot Coffe");
		Product p1 = new Product();
		p1.setProductDescription("Kahvee -1" );
		p1.setProductCategory(catalog);
		catalog.getCategoryProducts().add(p1);
		catalogRepository.save(catalog);
		
	}

}
