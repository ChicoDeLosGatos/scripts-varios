###########################################################################################################
#                                                                                                         #
#   Author: ChicoDeLosGatos                                                                               #
#   Tested on: PHP 7.2.34                                                                                 #
#   Last update: 24-02-2021                                                                               #
#                                                                                                         #
#   Description:                                                                                          #
#   This function will transform a generic formula expression to a ternary expression compatible with     #
#   javascript. For exemple:                                                                              #
#                                                                                                         #
#   $a = 2.4; $b = 4.2; $c = (a+b)*100+6;                                                                 #
#   $formula = "if($a>$b, if($a>2*$b, 'A is too large', 'A is larger'),if($c==666,                        #
#    'Oh no! A demon!', 'B is larger'))";                                                                 #
#                                                                                                         #
#   $f = parseExpr($formula) ->                                                                           #
#   (2.4>4.2)?((2.4>2*4.2)?'A is too large':'A is larger'):((666==666)?'Oh no! A demon!':'B is larger');  #
#                                                                                                         #
#   echo eval($f); -> "Oh no! A demon!"                                                                   #
#                                                                                                         #
#   Advice: If you're going to use it with strings, please prevent using comma `,` or strings containing  #
#   an `if` substring, because that would cause a malfunction of the code. It's a known bug.              #
#                                                                                                         #
###########################################################################################################


public function parseExpr(String $str){
		$tmp = '';
		$rplc = array("if");
		foreach(explode(",", $str) as $s)
				$tmp .= preg_match('/<=|<|>=|>|=/', $s) ?  "(".str_replace($rplc, '', $s).")?" : str_replace($rplc, '', $s).":";
		return substr($tmp,0,strlen($tmp)-1).";";
	}
