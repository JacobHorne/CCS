<?PHP
 
require_once("/fgcontactform.php");
 
$formproc = new FGContactForm();
 
//1. Add your email address here.
//You can add more than one recipients.
$formproc->AddRecipient('jacobhorne@gmail.com'); //<<---Put your
                                                          //email address here
 
//2. For better security. Get a random string from
// this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('2323r23rsddsf');
 
if(isset($_POST['submitted12']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("index.html");
   }
}
?>