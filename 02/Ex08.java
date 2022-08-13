public class Ex08 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(6, 6);
        int soma = 0;

        mat.preencheMatriz();

        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                if (i == j) {
                    soma += mat.value(i, j);
                }
            }
        }

        System.out.println("soma da diagonal principal: " + soma);
    }
}
