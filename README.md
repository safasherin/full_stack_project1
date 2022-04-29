# Assessment Be Unique Group
Check out demo here: [https://fullstackproject1.herokuapp.com/](https://fullstackproject1.herokuapp.com/)

## Solution Overview:
### Front End:
*	Front-End devoloped using  ReactJS framework 
*	hosted on heroku: [https://fullstackproject1.herokuapp.com/](https://fullstackproject1.herokuapp.com/)

#### Main features:
*	Responsive to different screen sizes
*	On Scroll Animation implemented
### Backend:
*	Developed using wordpress in headless CMS mode
*	Deployed on [https://blanchebackend.000webhostapp.com/](https://blanchebackend.000webhostapp.com/)
*	Access backend at [https://blanchebackend.000webhostapp.com/wp-admin](https://blanchebackend.000webhostapp.com/wp-admin)
*	Objects designed and managed using "custom post types" and "advanced custom fields" and exposed via REST APIs
#### APIs: 
1. Products: https://blanchebackend.000webhostapp.com/wp-json/wp/v2/products
get list of best selling products
attributes: 
	- image
	- name
	- price
	- description
	- offers
2. Categories: https://blanchebackend.000webhostapp.com/wp-json/wp/v2/categories
get list of all categories
attributes:
	- image
	- label
3. Testimonials: https://blanchebackend.000webhostapp.com/wp-json/wp/v2/testimonials get list of all Testimonials
attributes:
	- testimonial_text
	- rating_stars
4. InstaGram Posts: https://blanchebackend.000webhostapp.com/wp-json/wp/v2/igposts get list of all instagram posts
attributes:
 	- image



