
exports.SetterConfiguration = function (req, res, next){
  try{
    if(req.body.ipaddress){
        global.IPAddress=req.body.ipaddress;
      }
      if(req.body.package){
        global.Package=req.body.package;
      }
      if(req.body.rifname){
        global.RifName=req.body.rifname;
      }
      res.json({status:true});
    }
    catch(err){
      res.json({status:false,message:"ERROR",description:err});

    }
}

exports.GetterConfiguration=function (req,res,next){
    res.json({ipaddress:global.IPAddress,currentPackage:global.Package,rifname:global.Table[global.Package]});
}

exports.SetterTable=function (req,res,next){
  if(req.body.table){
    global.Table=req.body.table;
    res.json({status:true,message:"OK"});
  }else{
    res.json({status:false,message:"ERROR"});
  }
}

exports.GetterTable=function (req,res,next){
  res.json({table:global.Table});
}