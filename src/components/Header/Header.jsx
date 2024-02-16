import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import React from 'react'
const Header = () => {
	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<h1>BOOKShop</h1>
					<div className='header_txt'>
						<div className='search_form'>
							<input
								className='search_form_txt'
								type='text'
								placeholder='Search here'
							/>
							<button className='search_form_btn'>
								<SearchIcon
									className='search_form_img
							'
								/>{' '}
							</button>
						</div>
						<div className='profi'>
							<div className='shoping'>
								{' '}
								<ShoppingCartIcon className='search_form_img' />
								<h5>Корзина</h5>
							</div>
							<div className='account'>
								{' '}
								<AccountCircleOutlinedIcon className='search_form_img' />
								<h5>Админ</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
