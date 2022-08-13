public class Ex07 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(5, 5);
        int soma = 0;

        mat.preencheMatriz();

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (i < j) {
                    soma += mat.value(i, j);
                }
            }
        }

        System.out.println("soma dos valores acima da diagonal principal: " + soma);
    }

}
