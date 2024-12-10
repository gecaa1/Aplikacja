$(document).ready(function() {
    //  Ustawienie szarego koloru tła dla elementu #tresc
    $("#tresc").css("background-color", "gray");

    // pogrubienie czcionki dla wszystkich pól tekstowych
    $("input[type='text']").css("font-weight", "bold");

    //  tła pól tekstowych z wynikami obliczeń na jasnozielony
    $(".wynik").css("background-color", "lightgreen");

    //  Obsługa kliknięcia przycisku "Oblicz"
    $(".przycisk_do_wyslania").click(function() {
        var kwota = parseFloat($('#kwota_pozyczki').val());
        var liczba_rat = parseInt($('#liczba_rat').val());
        var oprocentowanie_roczne = parseFloat($('#oprocentowanie_roczne').val());
        
        if (isNaN(kwota) || isNaN(liczba_rat) || isNaN(oprocentowanie_roczne)) {
            alert("Proszę wprowadzić poprawne liczby.");
            return;
        }
        if (kwota <= 0){
            alert("Podaj poprawną kwotę");
            return;
        }
        if (liczba_rat < 0){
            alert("Podaj poprawną liczbę rat");
            return;
        }
        if (oprocentowanie_roczne < 0){
            alert("Podaj poprawne oprocentowanie roczne");
            return;
        }

        var oprocentowanie_miesieczne = oprocentowanie_roczne / 12 / 100;
        var rata_miesieczna = kwota * (oprocentowanie_miesieczne / (1 - Math.pow(1 + oprocentowanie_miesieczne, -liczba_rat)));
        var kwota_z_odsetkami = rata_miesieczna * liczba_rat;

        $('#oprocentowanie_miesieczne').val(rata_miesieczna.toFixed(2));
        $('#odsetki').val(kwota_z_odsetkami.toFixed(2));
    });
});
