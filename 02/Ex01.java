public class Ex01 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(4, 4);
        int cont = 0;

        mat.preencheMatriz();

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (mat.value(i, j) > 10) {
                    cont++;
                }
            }
        }

        System.out.println("Há " + cont + " valores maior(es) que 10");
    }
}
