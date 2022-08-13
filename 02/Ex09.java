public class Ex09 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(6, 6);
        int soma = 0;

        mat.preencheMatriz();

        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                if ((i + j) == (6 - 1)) { //A soma da coluna e da linha tem que ser igual ao tamanho da linha -1
                    soma += mat.value(i, j);
                }
            }
        }

        System.out.println("soma da diagonal secundária: " + soma);
    }
}
