
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
      res.json({status:"OK"});
    }
    catch(err){
      res.json({status:"FAIL",description:err});

    }
}

exports.GetterConfiguration=function (req,res,next){
    res.json({ipaddress:global.IPAddress,currentPackage:global.Package,rifname:global.RifName});
}

exports.SetterTable=function (req,res,next){
  if(req.body.table){
    global.table=req.body.table;
    res.json({status:"OK"});
  }else{
    res.json({status:"FAIL"});
  }
}

exports.GetterTable=function (req,res,next){
  res.json({table:global.table});
}