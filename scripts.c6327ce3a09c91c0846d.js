#!/usr/bin/env node
var minimist=require("minimist"),generator=require("./../lib/generator"),clipper=require("./../lib/clipper"),options={},arguments=minimist(process.argv.slice(2)),loremIpsum="",nakedArguments=arguments._;nakedArguments.length>=2&&(arguments.count=nakedArguments[0],arguments.units=nakedArguments[1]),options.units=arguments.units||"sentences",options.count=arguments.count||1,options.copy=!!arguments.copy,options.format=arguments.format||"plain",loremIpsum=generator(options),console.log(loremIpsum),options.copy?clipper(loremIpsum,function(e){e?process.exit(1):process.exit()}):process.exit();