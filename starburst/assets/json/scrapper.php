<?php
    $data = file_get_contents("loaderImages.json");
    $result = json_decode($data, true);
    foreach($result as $key => $value) {
        if(is_array($value))
        {
            $result1 = json_decode($value, true);
            foreach($value as $key1 => $value1) {
                echo $key1.":";
                echo "<br><br>";
                echo "<a download='$key1.png' href='$value1'><img src='$value1' /></a>";
            }
        } else {
            echo $key.":";
            echo "<br><br>";
            echo "<a download='$key.png' href='$value'><img src='$value' /></a>";
        }
    }
?>
