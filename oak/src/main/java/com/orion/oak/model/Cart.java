package com.orion.oak.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartId;
	
	@Transient
	private List<Product> selectedProducts;
	
	
	public double getTotalPrice() {
		return 0.0;
	}
	
	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public List<Product> getSelectedProducts() {
		return selectedProducts;
	}

	public void setSelectedProducts(List<Product> selectedProducts) {
		this.selectedProducts = selectedProducts;
	}

	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", selectedProducts=" + selectedProducts + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + cartId;
		result = prime * result + ((selectedProducts == null) ? 0 : selectedProducts.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cart other = (Cart) obj;
		if (cartId != other.cartId)
			return false;
		if (selectedProducts == null) {
			if (other.selectedProducts != null)
				return false;
		} else if (!selectedProducts.equals(other.selectedProducts))
			return false;
		return true;
	}
	
	
	
	
}

