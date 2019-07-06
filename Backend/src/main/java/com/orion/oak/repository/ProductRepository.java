package com.orion.oak.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.orion.oak.model.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	@Query("select p from Product p where p.productName = ?1 and p.productDescription =?2")
	public List<Product> findByNameAndDescription(String name,String description);
	
	@Query("select p from Product p where p.productCategory.categoryId=?1")
	public List<Product> getProductsByCategoryId (int categoryId);

	//@Query(value = "select * from Product Limit 2" , nativeQuery = true )
	
	
	
	

}

