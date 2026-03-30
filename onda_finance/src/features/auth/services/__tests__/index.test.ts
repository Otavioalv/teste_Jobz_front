import { describe, it, expect } from "vitest";
import { fetchLogin } from "..";


describe("fetchLogin", () => {
    it("deve logar com sucesso", async () => {
        const response = await fetchLogin({
            email: "tiago@gmail.com",
            password: "Tiago@padrao12",
        });

        expect(response).toHaveProperty("token");
        expect(response.user.email).toBe("tiago@gmail.com");
        expect(response.token).toContain("mocked-jwt-token-id");
    });

    it("deve falhar com credenciais inválidas", async () => {
        await expect(
            fetchLogin({
            email: "tiago@gmail.com",
            password: "senhaErrada",
        })

        ).rejects.toThrow("Email ou senha inválidos");
    });
});
