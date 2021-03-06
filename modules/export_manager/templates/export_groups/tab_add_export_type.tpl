{ft_include file='messages.tpl'}

<form action="{$same_page}" method="post" onsubmit="return rsv.validate(this, page_ns.rules)">
    <input type="hidden" name="page" value="export_types"/>
    <input type="hidden" name="export_group_id" value="{$export_group_id}"/>

    <table cellspacing="1" cellpadding="2" border="0">
        <tr>
            <td width="120" class="medium_grey">{$L.phrase_export_type_name}</td>
            <td>
                <input type="text" name="export_type_name" value="" style="width:200px" maxlength="50"/>
            </td>
        </tr>
        <tr>
            <td valign="top" class="medium_grey">{$L.word_visibility}</td>
            <td>
                <input type="radio" name="visibility" value="show" id="st1" checked/>
                <label for="st1" class="green">{$LANG.word_show}</label>
                <input type="radio" name="visibility" value="hide" id="st2"/>
                <label for="st2" class="red">{$L.word_hide}</label>

                <div class="light_grey">{$L.notify_export_type_visibility}</div>
            </td>
        </tr>
        <tr>
            <td class="medium_grey">{$L.word_filename}</td>
            <td>
                <input type="text" name="filename" value="{literal}submissions-{$M}.{$j}.html{/literal}"
                       style="width:200px" maxlength="50"/>
                <a href="http://modules.cloudservetechcentral.com/export_manager/documentation.php?page=filename_placeholders">{$L.phrase_view_available_placeholders}</a>
            </td>
        </tr>
    </table>

    <p class="bold">{$L.phrase_smarty_template}</p>

    <div class="editor_wrapper" style="width: 100%">
        <textarea name="smarty_template" id="smarty_template"></textarea>
    </div>

    <script type="text/javascript">
		var html_editor = new CodeMirror.fromTextArea(document.getElementById("smarty_template"), {literal}{{/literal}
			mode: "smarty"
            {literal}});{/literal}
    </script>

    <p>
        <input type="submit" name="add_export_type" value="{$L.phrase_add_export_type}"/>
    </p>

</form>
