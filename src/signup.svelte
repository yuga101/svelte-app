<script>
    import {_, date, time, number} from "svelte-i18n"
</script>
<main>
    <!-- <div>{$date(new Date(2022, 10, 15, 11, 25))}</div>
    <div>{$date(new Date(2022, 10, 15, 11, 25), { format: 'medium' } )}</div> -->

    <!-- <div>{$time(new Date(2022, 10, 15, 11, 25))}</div>
    <div>{$time(new Date(2022, 10, 15, 11, 25), { format: 'medium' } )}</div> -->

    <!-- <div>{$number(100000000)}</div>
    <div>{$number(100000000, { locale: 'pt' })}</div> -->

    <div>
        <h1>{$_("signup")}</h1>
      <form>
        <table>
        <tr><td><input type="text" name="mail" placeholder={$_("email")}></td></tr>
        <tr><td><input type="password" name="pwd" placeholder={$_("password")}></td></tr>
        <tr><td><input type="password" name="pwd-repeat" placeholder={$_("verify")}></td></tr>
        <tr><td></td></tr>
        <tr><td><button type="submit" name="signup-submit">{$_("signup")}</button></td></tr>
        </table>
      </form>
    </div>
</main>
<style>
     
    form {
      margin: 5px;
      padding: 12px;
      background: #ffffff;
      border-radius: 10px;
      align-items: center;
    }
  
    input{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 30px;
      border-radius: 6px;
      padding: 10px;
      
    }
    
    h1 {
      font-size: 40px;
      text-align: center;
      color: orange;
    }
    
    button {
      padding: 4px 3px 4px 3px;
      color: #FFF;
      background-color: orange;
      font-size: 30px;
      font-weight: bolder;
      text-align: center;
      font-style: normal;
      border-radius: 5px;
      width: 100%;
      border: 1px solid orangered;
      margin-bottom: 2px;
    }
    
    </style>