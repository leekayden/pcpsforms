<?php

$STRUCTURE = array();
$STRUCTURE["tables"] = array();
$STRUCTURE["tables"]["module_hooks_manager_rules"] = array(
    array(
        "Field"   => "hook_id",
        "Type"    => "mediumint(9)",
        "Null"    => "NO",
        "Key"     => "PRI",
        "Default" => ""
    ),
    array(
        "Field"   => "is_custom_hook",
        "Type"    => "enum('yes','no')",
        "Null"    => "NO",
        "Key"     => "",
        "Default" => "no"
    ),
    array(
        "Field"   => "status",
        "Type"    => "enum('enabled','disabled')",
        "Null"    => "NO",
        "Key"     => "",
        "Default" => "enabled"
    ),
    array(
        "Field"   => "rule_name",
        "Type"    => "varchar(255)",
        "Null"    => "NO",
        "Key"     => "",
        "Default" => ""
    ),
    array(
        "Field"   => "code",
        "Type"    => "mediumtext",
        "Null"    => "NO",
        "Key"     => "",
        "Default" => ""
    ),
    array(
        "Field"   => "hook_code_type",
        "Type"    => "enum('na','php','html','smarty')",
        "Null"    => "NO",
        "Key"     => "",
        "Default" => "na"
    )
);


$HOOKS = array();

$FILES = array(
    "code/",
    "code/index.php",
    "code/Module.class.php",
    "code/Rules.class.php",
    "images/",
    "images/icon.gif",
    "lang/",
    "lang/en_us.php",
    "templates/",
    "templates/add.tpl",
    "templates/edit.tpl",
    "templates/help.tpl",
    "templates/index.tpl",
    "templates/settings.tpl",
    "add.php",
    "edit.php",
    "help.php",
    "hooks_manager.js",
    "index.php",
    "library.php",
    "module_config.php",
    "settings.php",
    "styles.css"
);
