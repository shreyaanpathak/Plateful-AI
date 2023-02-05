<script lang="ts">
	import {page} from "$app/stores";
  import Img1 from "$lib/assets/tidepod1.png"
</script>

<body>
  <div class="float-container">
    <div class="float-child left">
      <div class="">
        <img src={Img1} class="about-imgs">
      </div>
    </div>

    <div class="float-child right">
      <div class="">
        <h1>Sustainability</h1>
        <p>
        Fugiat eiusmod minim ullamco ex culpa ut dolor ipsum nulla esse Lorem in consectetur cupidatat.
         Aliquip laboris veniam eiusmod aliqua irure consequat ipsum nisi veniam. 
         Ad proident duis consequat incididunt irure adipisicing non aute cillum elit eu voluptate.
         Aute fugiat et sint sint elit. Enim reprehenderit mollit eiusmod ut enim ullamco mollit quis laboris adipisicing.
         Tempor id pariatur voluptate aliqua esse id reprehenderit officia adipisicing nulla.
         Exercitation adipisicing excepteur pariatur enim occaecat eu mollit do officia ut aliqua velit dolor consectetur sunt.
        </p>
      </div>
    </div>
  </div>
</body>

<style>
	body {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #CC5519;
	}

  .float-container {
    padding: 20px;
  }

  .float-child {
      width: 50%;
      float: left;
      padding: 80px;
  }

  .left {
    width: 40%;
  }

  .right {
    width: 60%;
  }

  .about-imgs {
  }
</style>
