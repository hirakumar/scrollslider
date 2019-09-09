function FixedFeatured(){
		try{
			if(document.getElementById('fixedFeatured')!=null){
				var fixedFeatured = document.getElementById('fixedFeatured');
				var imgs = document.querySelectorAll('div.featured');
				var blocks = document.getElementsByClassName('block');
				var mobileBlock = document.createElement('div');
				var domImgs =[];
				var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
				var triggerIndex = null;
				var blockHeight=0;
				var blockImgs;
				cloneAndDomRemove();
				createMobileBlock();
				changeScreenshot();
				//setBlocks();
				var sliderInterval;
				var sliderCounter=1;
				var sliderDuration=2;
				window.addEventListener('scroll', changeScreenshot, false);
				window.addEventListener('resize', ulterWidthHeight, false);
				let author = `
***************************************
* App : Scroll Slider                 *
* Developed By : Hira Kumar Maharjan  *
* Email : hirakumar@protonmail.com    *
* Created Date : 21st Aug 2019        *
* Version : 0.2                       *
***************************************
				`;
				console.log(author);
			}
		}catch(err){
			console.log("Error on FixedFeatured : " + err);
		}		
	

	function ulterWidthHeight(){
		try{
			winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	    	winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		}catch(err){
			console.log("Error on ulterWidthHeight :" + err);
		}
	}

	function setBlocks(){
		try{
			let i=0;
			while(i<blocks.length){
				blocks[i].style.minHeight=winHeight+"px";
				i++;
			}
		}catch(err){
			console.log("Error on setBlocks :" + err);
		}		
	}

	function cloneAndDomRemove(){
		try{
			let i=0;
			while(i<imgs.length){
				domImgs[i]=imgs[i].cloneNode(true);
				//imgs[i].parentElement.removeChild(imgs[i]);
			i++;
			}
		}catch(err){
			console.log("Error on cloneAndDomRemove :" + err);
		}	
	}

	function createMobileBlock(){
		try{
			mobileBlock.className="mobile";
			fixedFeatured.appendChild(mobileBlock);
			let img=document.createElement('img');
			
			mobileBlock.appendChild(domImgs[0].firstElementChild);
			
		}catch(err){
			console.log("Error on createMobileBlock :" + err);
		}
		
	}

	
	function showSlider(){
		try{
				mobileBlock.removeChild(mobileBlock.firstChild);
				mobileBlock.appendChild(blockImgs[sliderCounter].cloneNode('true'));

				sliderCounter++;
				if(sliderCounter>=blockImgs.length){
					sliderCounter=0;
				}
		}catch(err){
				console.log("Error on showSlider :" + err);
		}
	}

function changeScreenshot(){
		try {
			
			let j=0;			
			blockHeight++;
			while(j<blocks.length){
				
				if(blocks[j].getBoundingClientRect().top>=0 && blocks[j].getBoundingClientRect().top<=winHeight/2){
					// State of Changine Block
					if(triggerIndex!=j){
						blockHeight=0;
						triggerIndex=j;
						
						if(mobileBlock.hasChildNodes()){
							mobileBlock.removeChild(mobileBlock.firstChild);
						}						

						blockImgs = blocks[j].querySelectorAll('.featured img');	

						if(blockImgs[0]!=undefined){
							mobileBlock.appendChild(blockImgs[0].cloneNode('true'));
						}
							
						
						/* First Clear Interval */
						sliderCounter=0;
						clearInterval(sliderInterval);


						/* Collection of Images of concern block */
											

						/* If image is more than 1 then need to show slider */
						if(blockImgs.length>1){
							sliderInterval = setInterval(showSlider,2000);
						}					

								
					}

				}

				j++;
			}


		}catch(err){
			console.log("Error on changeScreenshot :" + err);
		}
		
	}

}

new FixedFeatured();
